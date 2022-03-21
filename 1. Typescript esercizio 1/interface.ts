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

const obj2: Obj = {
  id: 3487,
  name: "Mario",
  surname: "Rossi",
  age: 25,
  dateOfBirth: "1995-14-12",
  address: {
    city: "Roma",
    street: "Via roma 10",
    postalCode: "00100",
  },
  role: role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
  username: "MarioRossi80",
  profilePhotoUrl: "https://bit.ly/3yRngEP",
  companies: [
    {
      id: 148979,
      name: "Develhope",
      description: "La migliore",
      location: {
        city: "Palermo",
        street: "Via Libertà 58",
        postalCode: "90139",
      },
    },
    {
      id: 123123,
      name: "Apple",
      description: "E insomma...",
      location: {
        city: "Cupertino",
        street: "One Apple Park Way",
        postalCode: "95014",
      },
    },
  ],
  gender: gender.male, // Generi possibili: 'male', 'female', 'other'
};
