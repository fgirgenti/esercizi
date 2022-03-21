class User implements Obj {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: { city: string; street: string; postalCode: string };
  role: role;
  username: string;
  profilePhotoUrl: string;
  companies: [
    {
      id: number;
      name: string;
      description: string;
      location: { city: string; street: string; postalCode: string };
    },
    {
      id: number;
      name: string;
      description: string;
      location: { city: string; street: string; postalCode: string };
    }
  ];
  gender: gender;
  get fullname(): string {
    return `${this.name} ${this.surname}`;
  }
}
