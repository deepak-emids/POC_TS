import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import EmployeeDetailsService from '../services/employee.service';
import logger from '../config/logger';
import { number } from '@hapi/joi';

class EmployeeDetailsController {
  public EmployeeDetailsService = new EmployeeDetailsService();

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public addEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.addEmployeeDetails(
        req.body
      );

      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);
      next(error);
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any =
        await this.EmployeeDetailsService.getAllEmployeeDetails();
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.getEmployeeDetails(
        req
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public deleteEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.deleteEmployeeDetails(
        req
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };

  /**
   * Controller to get all users available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public updateEmployeeDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data: any = await this.EmployeeDetailsService.updateEmployeeDetails(
        req,
        req.body
      );
      res.status(data.status).send(data);
    } catch (error) {
      logger.logger.error(error);

      next(error);
    }
  };
}

export default EmployeeDetailsController;
