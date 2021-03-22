export declare class Mentor {
    id: string;
    uid: string;
    fbUid: string;
    slackUid: string;
    color: string;
    name: string;
    nameEn: string;
    realName: string;
    serial: string;
    description: string;
    area: string;
    prefecture: string;
    city: string;
    publishStatus: number;
    nounaiStatus: number;
    nounai: string;
    paymentHistory: Array<Payment>;
    twitter: string;
    facebook: string;
    instagram: string;
    courses: Array<string>;
    profile: Array<Profile>;
    icon: string;
    isSecret: boolean;
    isCompletedRegistration: boolean;
    constructor(init?: Partial<Mentor>);
    toObject(): object;
}
export interface Payment {
    paymentIntent: string;
    timestamp: Date;
    plan: string;
    sku: string;
    amount: number;
    status: number;
    isSquare: boolean;
    charge: string;
    hasAddress: boolean;
}
export interface Profile {
    title: string;
    body: string;
}
