import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public newUser = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      firstName: Joi.string().alphanum().min(2).max(20).required(),
      lastName: Joi.string().alphanum().min(2).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')),

      address: Joi.string().min(3).max(100).optional(),
      department_Id: Joi.number().required(),
      role_Id: Joi.number().required(),
      mobileNo: Joi.number().optional(),
      aadharId: Joi.number().required(),
      date_Of_Joining: Joi.date().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };

  public loginUser = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default UserValidator;
