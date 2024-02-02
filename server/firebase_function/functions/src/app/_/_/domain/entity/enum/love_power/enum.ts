export enum LovePowerEnum {
    NotSelected,
    P000,
    P001,
    // P002,
    // P003,
    // P004,
    // P005,
    // P006,
    // P007,
    // P008,
    // P009,
    // P010,
    // P011,
    // P012,
    // P013,
    // P014,
    // P015,
    // P016,
    // P017,
    // P018,
    // P019,
    // P020,
}

export function LovePowerEnumFromString(value: string) : LovePowerEnum {
    switch (value) {
        case "P000": return LovePowerEnum.P000;
        case "P001": return LovePowerEnum.P001;
        // case "P002": return LovePowerEnum.P002;
        // case "P003": return LovePowerEnum.P003;
        // case "P004": return LovePowerEnum.P004;
        // case "P005": return LovePowerEnum.P005;
        // case "P006": return LovePowerEnum.P006;
        // case "P007": return LovePowerEnum.P007;
        // case "P008": return LovePowerEnum.P008;
        // case "P009": return LovePowerEnum.P009;
        // case "P010": return LovePowerEnum.P010;
        // case "P011": return LovePowerEnum.P011;
        // case "P012": return LovePowerEnum.P012;
        // case "P013": return LovePowerEnum.P013;
        // case "P014": return LovePowerEnum.P014;
        // case "P015": return LovePowerEnum.P015;
        // case "P016": return LovePowerEnum.P016;
        // case "P017": return LovePowerEnum.P017;
        // case "P018": return LovePowerEnum.P018;
        // case "P019": return LovePowerEnum.P019;
        // case "P020": return LovePowerEnum.P020;
        default:
            return LovePowerEnum.NotSelected;
    }
}

export function LovePowerEnumToString(obj : LovePowerEnum) : string {
    switch (obj) {
        case LovePowerEnum.P000: return "P000";
        case LovePowerEnum.P001: return "P001";
        // case LovePowerEnum.P002: return "P002";
        // case LovePowerEnum.P003: return "P003";
        // case LovePowerEnum.P004: return "P004";
        // case LovePowerEnum.P005: return "P005";
        // case LovePowerEnum.P006: return "P006";
        // case LovePowerEnum.P007: return "P007";
        // case LovePowerEnum.P008: return "P008";
        // case LovePowerEnum.P009: return "P009";
        // case LovePowerEnum.P010: return "P010";
        // case LovePowerEnum.P011: return "P011";
        // case LovePowerEnum.P012: return "P012";
        // case LovePowerEnum.P013: return "P013";
        // case LovePowerEnum.P014: return "P014";
        // case LovePowerEnum.P015: return "P015";
        // case LovePowerEnum.P016: return "P016";
        // case LovePowerEnum.P017: return "P017";
        // case LovePowerEnum.P018: return "P018";
        // case LovePowerEnum.P019: return "P019";
        // case LovePowerEnum.P020: return "P020";
        default:
            return "NotSelected";
    }
}

