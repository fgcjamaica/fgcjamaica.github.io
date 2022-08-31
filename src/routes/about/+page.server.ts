import type { Profile } from "$lib/types/Profile";
import type PageServerLoad from "@sveltejs/kit";
import { readFile } from "fs/promises";
export const load = async () => {

  return {
    profiles:
      [
        {
          "id": "ajani-hickling",
          "name": "Ajani Hickling",
          "role": "Lead Developer"
        }
      ]
  };
};
