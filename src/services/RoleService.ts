import 'reflect-metadata';
import { Role } from '../entity/Role';
import RoleData from '../models/RoleDetails';
import RoleRepository from '../repository/RoleRepository';
import Response from '../models/Response.model';

class RoleService {
  private roleRepository;

  constructor(roleRepository?: RoleRepository) {
    this.roleRepository = roleRepository
      ? roleRepository
      : new RoleRepository();
  }

  public addRole = async (body: RoleData): Promise<Response> => {
    let query: { roleName: string } = { roleName: body.roleName };

    let result = await this.roleRepository.get(query);

    if (result) {
      response = {
        data: {},
        message: 'Role Already Exists',
        status: 201
      };
    } else {
      const role = new Role();

      role.roleName = body.roleName;

      let newRole = await this.roleRepository.add(role);

      response = {
        data: newRole,
        message: 'Role Data Added',
        status: 201
      };
    }

    return response;
  };

  /*
  get Roles
  */
  public getAllRole = async (): Promise<Response> => {
    let response = new Response();

    let result = await this.roleRepository.getAll();

    if (result.length > 0) {
      response = {
        data: result,
        message: 'Roles Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return response;
    }
  };

  /*
  get Roles
  */
  public getRole = async (id: number): Promise<Response> => {
    let response = new Response();

    let query = { id: id };

    let result = await this.roleRepository.get(query);

    if (result) {
      response = {
        data: result,
        message: 'Role Fetched',
        status: 200
      };

      return response;
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return response;
    }
  };

  /*
  update Role
  */
  public updateRole = async (id: number, body: RoleData) => {
    let response = new Response();

    let newData = { ...body };

    let query = { id: id };

    let findRole = await this.roleRepository.get(query);
    if (findRole) {
      let result = await this.roleRepository.update(id, newData);

      if (result) {
        response = {
          data: result,
          message: 'Role Updated',
          status: 200
        };

        return response;
      }
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return response;
    }
  };

  /*
  delete Role work details
  */
  public deleteRole = async (id: number) => {
    let response = new Response();
    let query = { id: id };

    let findRole = await this.roleRepository.get(query);
    if (findRole) {
      let result = await this.roleRepository.delete(id);

      if (result) {
        response = {
          data: result,
          message: 'Role Deleted',
          status: 200
        };

        return response;
      }
    } else {
      response = {
        data: {},
        message: 'Role Not Found',
        status: 404
      };

      return response;
    }
  };
}

export default RoleService;
