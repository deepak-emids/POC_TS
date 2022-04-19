import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Response from '../models/Response';
import LoginRequest from '../models/LoginRequest';
import UserRepository from '../repository/UserRepository';

let response = new Response();
class UserService {
  private userRepository;

  constructor(userRepository?: UserRepository) {
    this.userRepository = userRepository
      ? userRepository
      : new UserRepository();
  }

  public loginUser = async (body: LoginRequest): Promise<Response> => {
    let query = { email: body.email };
    let find = await this.userRepository.get(query);

    if (find) {
      let checkPassword = await bcrypt.compare(body.password, find.password);
      if (checkPassword) {
        const token: string = jwt.sign(
          {
            email: find.email,
            id: find.id,
            role_Id: find.role_Id
          },
          process.env.SECRET
        );

        response = {
          data: {
            id: find.id,
            email: find.email,
            role_Id: find.role_Id,
            token: token
          },
          message: 'Login success',
          status: 200
        };

        return response;
      } else {
        response = {
          data: {},
          message: 'Incorrect Password',
          status: 401
        };
        return response;
      }
    } else {
      response = {
        data: {},
        message: 'User Not Found',
        status: 404
      };

      return response;
    }
  };
}

export default UserService;
