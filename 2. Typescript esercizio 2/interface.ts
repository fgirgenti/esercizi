enum role {
  staff = "staff",
  student = "student",
  manager = "manager",
  admin = "admin",
}

enum gender {
  male = "male",
  female = "female",
  other = "other",
}

interface Obj {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
  role: role;
  username: string;
  profilePhotoUrl: string;
  companies: [
    {
      id: number;
      name: string;
      description: string;
      location: {
        city: string;
        street: string;
        postalCode: string;
      };
    },
    {
      id: number;
      name: string;
      description: string;
      location: {
        city: string;
        street: string;
        postalCode: string;
      };
    }
  ];
  gender: gender;
}
