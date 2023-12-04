class Task:
    def __init__(self, task_id, task_name, task_first_location, start, end, task_team_sign, task_amount, task_mileage, task_content, task_sort, version, next_task, before_task):
        self.task_id = task_id
        self.task_name = task_name
        self.task_first_location = task_first_location
        self.start = start
        self.end = end
        self.task_team_sign = task_team_sign
        self.task_amount = task_amount
        self.task_mileage = task_mileage
        self.task_content = task_content
        self.task_sort = task_sort
        self.version = version
        self.next_task = next_task
        self.before_task = before_task
