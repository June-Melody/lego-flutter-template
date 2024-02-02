export enum NewEnum {
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

export function NewEnumFromString(value: string) : NewEnum {
    switch (value) {
        case "P000": return NewEnum.P000;
        case "P001": return NewEnum.P001;
        // case "P002": return NewEnum.P002;
        // case "P003": return NewEnum.P003;
        // case "P004": return NewEnum.P004;
        // case "P005": return NewEnum.P005;
        // case "P006": return NewEnum.P006;
        // case "P007": return NewEnum.P007;
        // case "P008": return NewEnum.P008;
        // case "P009": return NewEnum.P009;
        // case "P010": return NewEnum.P010;
        // case "P011": return NewEnum.P011;
        // case "P012": return NewEnum.P012;
        // case "P013": return NewEnum.P013;
        // case "P014": return NewEnum.P014;
        // case "P015": return NewEnum.P015;
        // case "P016": return NewEnum.P016;
        // case "P017": return NewEnum.P017;
        // case "P018": return NewEnum.P018;
        // case "P019": return NewEnum.P019;
        // case "P020": return NewEnum.P020;
        default:
            return NewEnum.NotSelected;
    }
}

export function NewEnumToString(obj : NewEnum) : string {
    switch (obj) {
        case NewEnum.P000: return "P000";
        case NewEnum.P001: return "P001";
        // case NewEnum.P002: return "P002";
        // case NewEnum.P003: return "P003";
        // case NewEnum.P004: return "P004";
        // case NewEnum.P005: return "P005";
        // case NewEnum.P006: return "P006";
        // case NewEnum.P007: return "P007";
        // case NewEnum.P008: return "P008";
        // case NewEnum.P009: return "P009";
        // case NewEnum.P010: return "P010";
        // case NewEnum.P011: return "P011";
        // case NewEnum.P012: return "P012";
        // case NewEnum.P013: return "P013";
        // case NewEnum.P014: return "P014";
        // case NewEnum.P015: return "P015";
        // case NewEnum.P016: return "P016";
        // case NewEnum.P017: return "P017";
        // case NewEnum.P018: return "P018";
        // case NewEnum.P019: return "P019";
        // case NewEnum.P020: return "P020";
        default:
            return "NotSelected";
    }
}

