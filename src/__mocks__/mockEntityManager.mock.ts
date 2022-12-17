import { EntityManager } from 'typeorm';

interface MockManagerArgs {
    saveReturn?: object | [object],
    findOne?: object
}
export async function getMockEntityManager  ({
    saveReturn = undefined,
    findOne = undefined
}:MockManagerArgs): Promise<EntityManager> {

    const manager: Partial<EntityManager> = {}

    manager.save = jest.fn().mockResolvedValue(saveReturn)
    manager.findOne = jest.fn().mockResolvedValue(findOne)
 
    return manager as EntityManager
}