import httpMock from 'node-mocks-http';
import RoleService from '../../services/RoleService';

import RoleController from '../../controllers/RoleController';

let req: any, res: any, next: any;

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 5
    }
  });
  res = httpMock.createResponse({});
  next = () => {};
});

let roleService = new RoleService();

let roleController = new RoleController(roleService);

describe('testing role controller', () => {
  it('when given a controller methods it should return type of method to be function', async () => {
    expect(typeof roleController.addRole).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(roleController.addRole).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    roleService.addRole = jest.fn();
    await roleController.addRole(req, res, next);

    expect(roleService.addRole).toHaveBeenCalled();
  });
});
