/// This hook encapsulates mutation logic, providing a way to execute mutations with Convex while managing the pending state. It returns an object containing a mutate function for executing mutations and a pending boolean indicating whether a mutation is currently pending.
import { useState } from "react";
import { useMutation } from "convex/react";
export const useApiMutation = (mutationFunction: any) => {

  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    //- Setting pending state to true before executing the mutation
    setPending(true);

    // Executing the mutation and handling the pending state
    return apiMutation(payload)
      .finally(() => setPending(false)) //- Setting pending state back to false after mutation completion (regardless of success or failure)
      .then((result) => {
        return result; // Returning the mutation result
      })
      .catch((error) => {
        throw error; // Throwing any errors that occurred during the mutation
      });
  };

  // Returning an object containing the mutate function and the pending state
  return {
    mutate,
    pending,
  };
};
