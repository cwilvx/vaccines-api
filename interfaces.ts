export interface Child {
  child_name: string;
  guardian_name: string;
  guardian_phone: string;
  age: string;
  location: string;
  gender: string;
}

export function validateChild(_data: any): _data is Child {
  // check if all the required fields are present and of the correct type
  return (
    typeof _data.child_name === "string" &&
    typeof _data.guardian_name === "string" &&
    typeof _data.guardian_phone === "string" &&
    typeof _data.age === "string" &&
    typeof _data.location === "string" &&
    typeof _data.gender === "string"
  );
}
