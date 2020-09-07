export class Mentor {
  id = ''; // Mentor ID
  uid = ''; // Firebase UID
  fbUid = ''; // Facebook UID
  slackUid = ''; // Slack UID

  // Card info
  color = '';

  name = '';
  nameEn = '';
  realName = '';
  serial = '';
  description = '';
  area = 'kansai';
  prefecture = 'none';
  city = '';

  publishStatus = 0;
  nounaiStatus = 0;

  nounai = '';

  paymentHistory: Array<Payment> = [];

  twitter = '';
  facebook = '';
  instagram = '';

  courses: Array<string> = [];
  profile: Array<Profile> = [
    { title: '趣味', body: '' },
    { title: '特技', body: '' },
    { title: '出身', body: '' }
  ];

  icon = '';
  isSecret = false;
  isCompletedRegistration = false;

  constructor(init?: Partial<Mentor>) {
    Object.assign(this, init);
  }

  public toObject(): object {
    return Object.assign({}, this);
  }
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
