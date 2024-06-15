import * as OBC from 'openbim-components';
import * as WEBIFC from 'web-ifc';
import { FragmentsGroup } from 'bim-fragment';
import { QtoResult } from '@entities/qto';

export class SimpleQto extends OBC.Component<QtoResult> implements OBC.UI, OBC.Disposable {
    static uuid = '8b75d487-cc9e-4513-879c-328798196f16';
    private _components: OBC.Components;
    private _qtoResult: QtoResult = {};
    enabled = true;
    uiElement = new OBC.UIElement<{
        activationBtn: OBC.Button
        qtoList: OBC.FloatingWindow
    }>();

    constructor(components: OBC.Components) {
        super(components);
        this._components = components;
        this._components.tools.add(SimpleQto.uuid, this);
        this.setUI();
    }

    async setup() {
        const highlighter = await this._components.tools.get(OBC.FragmentHighlighter);
        highlighter.events.select.onHighlight.add(async (fragmentIdMap) => {
            await this.sumQuantities(fragmentIdMap);
        });
        highlighter.events.select.onClear.add(() => {
            this.resetQto();
        });
    }

    private setUI() {
        const activationBtn = new OBC.Button(this._components);
        activationBtn.materialIcon = 'functions';

        const qtoList = new OBC.FloatingWindow(this._components);
        qtoList.title = 'Quantification';
        this._components.ui.add(qtoList);
        qtoList.visible = false;

        activationBtn.onClick.add(() => {
            activationBtn.active = !activationBtn.active;
            qtoList.visible = activationBtn.active;
        });

        this.uiElement.set({ activationBtn, qtoList });
    }

    async updateQtoUI() {
        const qtoList = this.uiElement.get('qtoList');
        await qtoList.slots.content.dispose(true);
        const qtoTemplate = `
    <div>
    <p id="qto" style="color: rgb(180, 180, 180)"}>Sample: 0</p>
    </div>
    `;
        for (const setName in this._qtoResult) {
            const qtoGroup = new OBC.TreeView(this._components);
            qtoGroup.slots.content.get().style.rowGap = '4px';
            qtoGroup.title = setName;
            qtoList.addChild(qtoGroup);
            const qtos = this._qtoResult[setName];
            for (const qtoName in qtos) {
                const value = qtos[qtoName];
                const ui = new OBC.SimpleUIComponent(this._components, qtoTemplate);
                ui.get().style.display = 'flex';
                const qtoElement = ui.getInnerElement('qto') as HTMLParagraphElement;
                qtoElement.textContent = `${qtoName}: ${value.toFixed(2)}`;
                qtoGroup.addChild(ui);
            }
        }
    }

    async sumQuantities(fragmentIdMap: OBC.FragmentIdMap) {
        this._qtoResult = {};
        const fragmentManager = await this._components.tools.get(OBC.FragmentManager);
        const propertiesProcessor = await this._components.tools.get(OBC.IfcPropertiesProcessor);
        for (const fragmentID in fragmentIdMap) {
            const fragment = fragmentManager.list[fragmentID];
            const model = fragment.mesh.parent;
            // @ts-ignore
            if (!(model instanceof FragmentsGroup && model.properties)) {
                continue;
            }
            // @ts-ignore
            const properties = model.properties;
            const modelIndexMap = propertiesProcessor.get()[model.uuid];
            if (!modelIndexMap) {
                continue;
            }
            const expressIDs = fragmentIdMap[fragmentID];
            for (const expressID of expressIDs) {
                const entityMap = modelIndexMap[Number(expressID)];
                if (!entityMap) {
                    continue;
                }
                for (const mapID of entityMap) {
                    const entity = properties[mapID];
                    const { name: setName } = OBC.IfcPropertiesUtils.getEntityName(properties, mapID);
                    if (!(entity.type === WEBIFC.IFCELEMENTQUANTITY && setName)) {
                        continue;
                    }
                    if (!(setName in this._qtoResult)) {
                        this._qtoResult[setName] = {};
                    }
                    OBC.IfcPropertiesUtils.getQsetQuantities(
                        properties,
                        mapID,
                        (qtoID) => {
                            const { name: qtoName } = OBC.IfcPropertiesUtils.getEntityName(properties, qtoID);
                            const { value } = OBC.IfcPropertiesUtils.getQuantityValue(properties, qtoID);
                            if (!(qtoName && value)) {
                                return;
                            }
                            if (!(qtoName in this._qtoResult[setName])) {
                                this._qtoResult[setName][qtoName] = 0;
                            }
                            this._qtoResult[setName][qtoName] += value;
                        },
                    );
                }
            }
        }
        await this.updateQtoUI();
    }

    async dispose() {
        const highlighter = await this._components.tools.get(OBC.FragmentHighlighter);
        highlighter.events.select.onHighlight.remove(this.sumQuantities);
        this.uiElement.dispose();
        this.resetQto();
    }

    resetQto() {
        this._qtoResult = {};
        const qtoWindow = this.uiElement.get('qtoList');
        qtoWindow.slots.content.dispose(true);
    }

    get(): QtoResult {
        return this._qtoResult;
    }
}