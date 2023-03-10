import { GetCurrentUserLoggedRepository } from "../../domain/repository.getCurrentUserLogged";

export class GetCurrentUserLoggedFetch implements GetCurrentUserLoggedRepository {

    run(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}