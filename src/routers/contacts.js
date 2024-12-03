import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  // upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsSchema,
  updateContactsSchema,
} from '../validation/contacts.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';

const router = Router();

router.use(authenticate);
router.get(
  '/',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(getAllContactsController),
);

router.get('/contacts', ctrlWrapper(getAllContactsController));
router.get(
  '/contacts/:contactId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  ctrlWrapper(getContactByIdController),
);
router.post(
  '/contacts',
  checkRoles(ROLES.TEACHER),
  validateBody(createContactsSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/contacts/:contactId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  validateBody(updateContactsSchema),
  ctrlWrapper(patchContactController),
);

// router.put(
//   '/:contactId',
//   isValidId,
//   checkRoles(ROLES.TEACHER),
//   validateBody(createContactsSchema),
//   ctrlWrapper(upsertContactController),
// );

router.delete(
  '/contacts/:contactId',
  checkRoles(ROLES.TEACHER),
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;
