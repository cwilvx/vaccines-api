export interface Child {
  id: number;
  child_name: string;
  guardian_name: string;
  guardian_phone: number;
  age: number;
  location: string;
  is_male: boolean;
}

export function validateChild(_data: any): _data is Child {
  // check if all the required fields are present and of the correct type
  return (
    typeof _data.id === "number" &&
    typeof _data.child_name === "string" &&
    typeof _data.guardian_name === "string" &&
    typeof _data.guardian_phone === "number" &&
    typeof _data.age === "number" &&
    typeof _data.location === "string" &&
    typeof _data.is_male === "boolean"
  );
}
