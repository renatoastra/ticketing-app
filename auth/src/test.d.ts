
interface UserPayload {
  id: string;
  email: string;
}

// Augment the existing Request type definition
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}
