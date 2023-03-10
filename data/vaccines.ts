export default [
  {
    age: "At birth",
    vaccines: [
      {
        full_name: "Bacillus Calmette-Guérin (BCG)",
        diseases_protected: ["Tuberculosis"],
      },
    ],
    age_range: { start: 0, end: 42 },
  },
  {
    age: "At 6 weeks",
    vaccines: [
      {
        full_name:
          "Diphtheria, Tetanus, Pertussis, Hepatitis B, Haemophilus influenzae type b (DTP-HepB-Hib 1)",
        diseases_protected: [
          "Diphtheria",
          "Tetanus",
          "Pertussis",
          "Hepatitis B",
          "Haemophilus influenzae type b",
        ],
      },
    ],
    age_range: { start: 42, end: 70 },
  },
  {
    age: "At 10 weeks",
    vaccines: [
      {
        full_name:
          "Diphtheria, Tetanus, Pertussis, Hepatitis B, Haemophilus influenzae type b (DTP-HepB-Hib 2)",
        diseases_protected: [
          "Diphtheria",
          "Tetanus",
          "Pertussis",
          "Hepatitis B",
          "Haemophilus influenzae type b",
        ],
      },
    ],
    age_range: { start: 70, end: 98 },
  },
  {
    age: "At 14 weeks",
    vaccines: [
      {
        full_name:
          "Diphtheria, Tetanus, Pertussis, Hepatitis B, Haemophilus influenzae type b (DTP-HepB-Hib 3)",
        diseases_protected: [
          "Diphtheria",
          "Tetanus",
          "Pertussis",
          "Hepatitis B",
          "Haemophilus influenzae type b",
        ],
      },
    ],
    age_range: { start: 98, end: 180 },
  },
  {
    age: "At 6 months",
    vaccines: [
      {
        full_name: "Oral Poliovirus Vaccine (OPV 1)",
        diseases_protected: ["Polio"],
      },
    ],
    age_range: { start: 180, end: 270 },
  },
  {
    age: "At 9 months",
    vaccines: [
      {
        full_name: "Measles Vaccine (Measles 1)",
        diseases_protected: ["Measles"],
      },
    ],
    age_range: { start: 270, end: 540 },
  },
  {
    age: "At 18 months",
    vaccines: [
      {
        full_name:
          "Oral Poliovirus Vaccine, Diphtheria, Tetanus, Pertussis Vaccine, Measles Vaccine (OPV 2, DTP 1, Measles 2)",
        diseases_protected: [
          "Polio",
          "Diphtheria",
          "Tetanus",
          "Pertussis",
          "Measles",
        ],
      },
    ],
    age_range: { start: 540, end: 1825 },
  },
  {
    age: "5-6 years",
    vaccines: [
      {
        full_name:
          "Oral Poliovirus Vaccine, Diphtheria, Tetanus, Pertussis Vaccine (OPV 3, DTP 2)",
        diseases_protected: ["Polio", "Diphtheria", "Tetanus", "Pertussis"],
      },
      {
        full_name: "Measles, Mumps and Rubella Vaccine (MMR)",
        diseases_protected: ["Measles", "Mumps", "Rubella"],
      },
    ],
    age_range: { start: 1825, end: 3650 },
  },
  {
    age: "10 years",
    vaccines: [
      {
        full_name: "Human Papillomavirus Vaccine (HPV)",
        diseases_protected: ["Cervical Cancer", "Genital Warts"],
      },
    ],
    age_range: { start: 3650, end: 3650 },
  },
  {
    age: "13 years",
    vaccines: [
      {
        full_name: "Diphtheria, Tetanus, Pertussis Vaccine (Tdap)",
        diseases_protected: ["Diphtheria", "Tetanus", "Pertussis"],
      },
    ],
    age_range: {
      start: 4745,
      end: 5110,
    },
  },
];
