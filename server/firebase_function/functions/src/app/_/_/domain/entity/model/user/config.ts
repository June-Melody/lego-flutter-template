export class UserModelConfig {
    generateDocId() {
        return `${Date.now()}`;
        // return `${this.generateRandomString(10)}`;
        // return 'sample';
    }

    generateRandomString(length: number): string {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        const charsLength = chars.length;
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charsLength));
        }
        return result;
    }
}
