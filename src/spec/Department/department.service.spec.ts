import httpMock from 'node-mocks-http';
import DepartmentRepository from '../../repository/DepartmentRepository';

import DepartmentService from '../../services/DepartmentService';

let req: any, res: any, next: any;
const newDepartment = { departmentName: 'testDepartment' };
const id: number = 5;

beforeEach(() => {
  req = httpMock.createRequest({
    params: {
      id: 5
    }
  });
  res = httpMock.createResponse({});
  next = () => {};
});

let departmentRepository = new DepartmentRepository();

let departmentService = new DepartmentService(departmentRepository);

describe('unit tests for employee service module', () => {
  it('when given a service method addDepartment it should return type of method to be function', async () => {
    expect(typeof departmentService.addDepartment).toBe('function');
  });

  it('when given a service method addDepartment it should be defined', async () => {
    expect(departmentService.addDepartment).toBeDefined();
  });

  it('when a give service method addDepartment is called it should call corresponding service method', async () => {
    departmentRepository.add = jest.fn();
    await departmentService.addDepartment(newDepartment);

    expect(departmentRepository.add).toHaveBeenCalled();
  });

  it('when given a service method getAllDepartment it should return type of method to be function', async () => {
    expect(typeof departmentService.getAllDepartment).toBe('function');
  });

  it('when given a service method getAllDepartment it should be defined', async () => {
    expect(departmentService.getAllDepartment).toBeDefined();
  });

  it('when a give service method getAllDepartmentis called it should call corresponding service method', async () => {
    departmentRepository.getAll = jest.fn();
    await departmentService.getAllDepartment();

    expect(departmentRepository.getAll).toHaveBeenCalled();
  });

  it('when given a service method getDepartment it should return type of method to be function', async () => {
    expect(typeof departmentService.getDepartment).toBe('function');
  });

  it('when given a service method getDepartment it should be defined', async () => {
    expect(departmentService.getDepartment).toBeDefined();
  });
});
