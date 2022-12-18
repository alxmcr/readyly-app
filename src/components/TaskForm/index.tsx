export default function TaskForm() {
  return (
    <form>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Enter task description"
          required
        />
      </div>
      <button type="submit">+ ADD NEW</button>
    </form>
  );
}
