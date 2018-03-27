import Task from '../../models/tasks'

export default {
  getAllTasks() {
    return Task.find()
  }
}
