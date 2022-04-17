import httpMock from 'node-mocks-http';
import DepartmentService from '../../services/DepartmentService';

import DepartmentController from '../../controllers/DepartmentController';

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

let departmentService = new DepartmentService();

let departmentController = new DepartmentController(departmentService);

describe('testing Department controller', () => {
  it('when given a controller methods it should return type of method to be function', async () => {
    expect(typeof departmentController.addDepartment).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(departmentController.addDepartment).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    departmentService.addDepartment = jest.fn();
    await departmentController.addDepartment(req, res, next);

    expect(departmentService.addDepartment).toHaveBeenCalled();
  });

  it('when given a controller methods it should return type of method to be function', async () => {
    expect(typeof departmentController.getAllDepartment).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(departmentController.getAllDepartment).toBeDefined();
  });

  it('when a give controller method is called it should call corresponding service method', async () => {
    departmentService.getAllDepartment = jest.fn();
    await departmentController.getAllDepartment(req, res, next);

    expect(departmentService.getAllDepartment).toHaveBeenCalled();
  });

  it('when given a controller method getDepartment it should return type of method to be function', async () => {
    expect(typeof departmentController.getDepartment).toBe('function');
  });

  it('when given a controller method getDepartment it should be defined', async () => {
    expect(departmentController.getDepartment).toBeDefined();
  });

  it('when a give controller  method getDepartment is called it should call corresponding service method', async () => {
    departmentService.getDepartment = jest.fn();
    await departmentController.getDepartment(req, res, next);

    expect(departmentService.getDepartment).toHaveBeenCalled();
  });

  it('when a give controller getDepartment method is called it should call corresponding service method with parameters', async () => {
    departmentService.getDepartment = jest.fn();
    await departmentController.getDepartment(req, res, next);

    expect(departmentService.getDepartment).toBeCalledWith(req.params.id);
  });

  it('when given a controller methods it should return type of method to be function', async () => {
    departmentController.getDepartment = jest.fn();

    expect(typeof departmentController.deleteDepartment).toBe('function');
  });

  it('when given a controller method it should be defined', async () => {
    expect(departmentController.deleteDepartment).toBeDefined();
  });
});
