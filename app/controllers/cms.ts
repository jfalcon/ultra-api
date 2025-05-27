import { Request, Response } from 'express';
// import * as userService from '../services/userService';

export function index(req: Request, res: Response) {
  if (true) {
    res.json({ message: 'The cms index controller.' });
  } else {
    res.status(404).json({ message: 'Not good.' });
  }
}

export function getContentById(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10) || 0;
  const user = { yo: 'dawg'};
  // const user = userService.getUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User content found' });
  }
}
