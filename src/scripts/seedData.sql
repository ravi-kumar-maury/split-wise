INSERT INTO public.users
(id, username, email, "password", created_at, updated_at)
VALUES(18, 'ravi', 'ravi@gmail.com', '1234', '2023-05-18 12:04:17.533', '2023-05-18 12:04:17.533');
INSERT INTO public.users
(id, username, email, "password", created_at, updated_at)
VALUES(17, 'shaman', 'ravi@gmail.com', '1234', '2023-05-18 12:03:26.358', '2023-05-18 12:03:26.358');
INSERT INTO public.users
(id, username, email, "password", created_at, updated_at)
VALUES(19, 'neha', 'ravisuzerain@gmail.com', '1234', '2023-05-18 12:05:04.954', '2023-05-18 12:05:04.954');

INSERT INTO public."groups"
(id, group_name, created_by, created_at, updated_at)
VALUES(1, 'Brunch1', 19, '2023-05-18 15:35:55.505', '2023-05-18 15:35:55.505');

INSERT INTO public.expenses
(id, description, amount, paid_by, group_id, split_type, created_at, updated_at)
VALUES(24, 'madagaskar trip 3', 300.00, 18, 1, 'equal', '2023-05-19 08:36:21.735', '2023-05-19 08:36:21.735');
INSERT INTO public.expenses
(id, description, amount, paid_by, group_id, split_type, created_at, updated_at)
VALUES(25, 'madagaskar trip 3', 500.00, 17, 1, 'equal', '2023-05-19 08:36:32.395', '2023-05-19 08:36:32.395');

INSERT INTO public.user_groups
(id, user_id, group_id, created_at, updated_at)
VALUES(3, 17, 1, '2023-05-18 17:50:52.477', '2023-05-18 17:50:52.477');
INSERT INTO public.user_groups
(id, user_id, group_id, created_at, updated_at)
VALUES(4, 18, 1, '2023-05-18 18:24:44.097', '2023-05-18 18:24:44.097');
INSERT INTO public.user_groups
(id, user_id, group_id, created_at, updated_at)
VALUES(5, 19, 1, '2023-05-18 18:24:49.873', '2023-05-18 18:24:49.873');


INSERT INTO public.user_expenses
(id, user_id, friend_id, expense_id, amount_owe_by_friend, created_at, updated_at)
VALUES(7, 17, 18, 25, 166.67, '2023-05-19 08:36:32.413', '2023-05-19 08:36:32.413');
INSERT INTO public.user_expenses
(id, user_id, friend_id, expense_id, amount_owe_by_friend, created_at, updated_at)
VALUES(8, 17, 19, 25, 166.67, '2023-05-19 08:36:32.417', '2023-05-19 08:36:32.417');
INSERT INTO public.user_expenses
(id, user_id, friend_id, expense_id, amount_owe_by_friend, created_at, updated_at)
VALUES(9, 19, 18, 28, 200.00, '2023-05-19 08:46:24.959', '2023-05-19 08:46:24.959');
INSERT INTO public.user_expenses
(id, user_id, friend_id, expense_id, amount_owe_by_friend, created_at, updated_at)
VALUES(10, 19, 17, 28, 200.00, '2023-05-19 08:46:24.962', '2023-05-19 08:46:24.962');
INSERT INTO public.user_expenses
(id, user_id, friend_id, expense_id, amount_owe_by_friend, created_at, updated_at)
VALUES(5, 18, 17, 24, 166.67, '2023-05-19 08:36:21.752', '2023-05-19 08:36:21.752');
INSERT INTO public.user_expenses
(id, user_id, friend_id, expense_id, amount_owe_by_friend, created_at, updated_at)
VALUES(6, 18, 19, 24, 166.67, '2023-05-19 08:36:21.756', '2023-05-19 08:36:21.756');
