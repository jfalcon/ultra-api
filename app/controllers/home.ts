import { Request, Response } from 'express';

export function index(req: Request, res: Response) {
  if (true) {
    res.json({ message: 'The home controller is great.' });
  } else {
    res.status(404).json({ message: 'Not good.' });
  }
}
