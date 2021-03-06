import { User } from '../../../../app/core/user/model/entities/user.entity';

export const userSample: User[] = [
  {
    id: 1,
    modificationCounter: 1,
    username: 'user0',
    password: '$2a$10$qPM1WjcRKAffHxWXYEfPJOh2vGPlT/Fdv.hJX/LaZjzg/Wtj2csqO',
    twoFactorStatus: false,
    email: 'user0@mail.com',
    roleId: 1,
  },
  {
    id: 2,
    modificationCounter: 1,
    username: 'waiter',
    password: '$2b$12$kQhmN3aAvDRZhSusiyZReeh2O6dDAA9sPDKksFTG8gsn6nKbkcJeG',
    twoFactorStatus: false,
    email: 'waiter@mail.com',
    roleId: 2,
  },
  {
    id: 3,
    modificationCounter: 1,
    username: 'manager',
    password: '$2a$10$IsTlZemkiPKE2gjtnSMlJOX5.uitNHXNRpLYyvyxNbHEhjpY.XdTq',
    twoFactorStatus: false,
    email: 'manager@mail.com',
    roleId: 3,
  },
  {
    id: 4,
    modificationCounter: 1,
    username: 'cook',
    password: '$2a$10$NwpJKhs/3UFHAOWGZhbRW.33Eb.usBOEr4w73gYbyo7a1OD1doIGe',
    twoFactorStatus: false,
    email: 'cook@mail.com',
    roleId: 4,
  },
  {
    id: 5,
    modificationCounter: 1,
    username: 'barkeeper',
    password: '$2a$10$8T0JB1c1sWCaClSVBHbP4us38Tg/5j.B.C4T0MJWjQU8CjSGqHuam',
    twoFactorStatus: false,
    email: 'barkeeper@mail.com',
    roleId: 5,
  },
  {
    id: 6,
    modificationCounter: 1,
    username: 'chief',
    password: '$2a$10$hfYO45o.cIT0OtGJfNlIJ.l945JECKeEKEy3RxS0cI8jA90YDIpA.',
    twoFactorStatus: false,
    email: 'chief@mail.com',
    roleId: 6,
  },
];
