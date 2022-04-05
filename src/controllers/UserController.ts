import userService from '../services/UserService';
import { Request, Response, NextFunction } from 'express';
import ILoginUser from '../models/response.model';

class UserController {
  public UserService = new userService();

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const responseData: ILoginUser = await this.UserService.loginUser(
        req.body
      );
      res.status(200).json({
        code: responseData.status,
        data: responseData.data,
        message: responseData.message
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;