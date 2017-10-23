export class DILLER {
    private _flDurum: number = 1;
    public DML_TYPE: string;
    public SQ_WEB_DIL_NO?: number;
    public CH_DIL_ADI: string;
    public CH_DIL_ISO_KOD: string;
    get FL_DURUM(): number { return this._flDurum; }
    set FL_DURUM(value: number) { this._flDurum = value; }
}
