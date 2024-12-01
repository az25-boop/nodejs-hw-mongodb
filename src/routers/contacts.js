import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  upsertContactController,
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

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));
router.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);
router.post(
  '/contacts',
  validateBody(createContactsSchema),
  ctrlWrapper(createContactController),
);

router.put(
  '/:contactId',
  isValidId,
  validateBody(createContactsSchema),
  ctrlWrapper(upsertContactController),
);
router.patch(
  '/contacts/:contactId',
  validateBody(updateContactsSchema),
  ctrlWrapper(patchContactController),
);
router.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

export default router;
