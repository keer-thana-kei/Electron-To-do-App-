// let todos = [];

// // Load todos on startup
// async function loadTodos() {
//   try {
//     todos = await window.electronAPI.loadTodos();
//     renderTodos();
//   } catch (error) {
//     console.error('Error loading todos:', error);
//   }
// }  
 
// // Save todos to file
// async function saveTodos() {
//   try {
//     await window.electronAPI.saveTodos(todos);
//   } catch (error) {
//     console.error('Error saving todos:', error);
//   }
// } 

// // Render todos to the DOM
// function renderTodos() {
//   const todoList = document.getElementById('todoList');
//   const stats = document.getElementById('stats');

//   if (todos.length === 0) {
//     todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one to get started!</div>';
//     stats.innerHTML = '';
//     return;
//   }

//   todoList.innerHTML = todos.map((todo, index) => `
//     <div class="todo-item">
//       <div class="checkbox ${todo.completed ? 'checked' : ''}" data-index="${index}"></div>
//       <div class="todo-text ${todo.completed ? 'completed' : ''}">${escapeHtml(todo.text)}</div>
//       <button class="delete-btn" data-index="${index}">Delete</button>
//     </div>
//   `).join('');

//   // Update stats
//   const remaining = todos.filter(t => !t.completed).length;
//   stats.innerHTML = `${remaining} of ${todos.length} tasks remaining`;

//   // Add event listeners
//   document.querySelectorAll('.checkbox').forEach(checkbox => {
//     checkbox.addEventListener('click', toggleTodo);
//   });

//   document.querySelectorAll('.delete-btn').forEach(btn => {
//     btn.addEventListener('click', deleteTodo);
//   });
// }

// // Add new todo
// function addTodo() {
//   const input = document.getElementById('todoInput');
//   const text = input.value.trim();

//   if (text) {
//     todos.push({
//       id: Date.now(),
//       text: text,
//       completed: false
//     });
    
//     input.value = '';
//     saveTodos();
//     renderTodos();
//   }
// }

// // Toggle todo completion
// function toggleTodo(e) {
//   const index = parseInt(e.target.dataset.index);
//   todos[index].completed = !todos[index].completed;
//   saveTodos();
//   renderTodos();
// }

// // Delete todo
// function deleteTodo(e) {
//   const index = parseInt(e.target.dataset.index);
//   todos.splice(index, 1);
//   saveTodos();
//   renderTodos();
// }

// // Escape HTML to prevent XSS
// function escapeHtml(text) {
//   const div = document.createElement('div');
//   div.textContent = text;
//   return div.innerHTML;
// }

// // Event listeners
// document.getElementById('addBtn').addEventListener('click', addTodo);

// document.getElementById('todoInput').addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     addTodo();
//   }
// });

// // Load todos when app starts
// loadTodos();






// let todos = [];

// // Motivational messages
// const motivationalMessages = [
//   "🎉 Great job!",
//   "✨ Well done!",
//   "🌟 Amazing work!",
//   "💪 Keep it up!",
//   "🚀 You're on fire!",
//   "👏 Fantastic!",
//   "🎯 Nailed it!",
//   "⭐ Outstanding!",
//   "🏆 Excellent!",
//   "💫 You did it!" 
// ];

// // Load todos on startup
// async function loadTodos() {
//   try {
//     todos = await window.electronAPI.loadTodos();
//     renderTodos();
//   } catch (error) {
//     console.error('Error loading todos:', error);
//   }
// }  
 
// // Save todos to file
// async function saveTodos() {
//   try {
//     await window.electronAPI.saveTodos(todos);
//   } catch (error) {
//     console.error('Error saving todos:', error);
//   }
// }   
  
// // Render todos to the DOM
// function renderTodos() {
//   const todoList = document.getElementById('todoList');
//   const stats = document.getElementById('stats');
   
//   if (todos.length === 0) {
//     todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one to get started!</div>';
//     stats.innerHTML = '';
//     return;
//   }   

//   todoList.innerHTML = todos.map((todo, index) => `
//     <div class="todo-item">
//       <div class="checkbox ${todo.completed ? 'checked' : ''}" data-index="${index}"></div>
//       <div class="todo-text ${todo.completed ? 'completed' : ''}">${escapeHtml(todo.text)}</div>
//       <button class="delete-btn" data-index="${index}">Delete</button>
//     </div>
//   `).join('');

//   // Update stats
//   const remaining = todos.filter(t => !t.completed).length;
//   stats.innerHTML = `${remaining} of ${todos.length} tasks remaining`;

//   // Add event listeners
//   document.querySelectorAll('.checkbox').forEach(checkbox => {
//     checkbox.addEventListener('click', toggleTodo);
//   });

//   document.querySelectorAll('.delete-btn').forEach(btn => {
//     btn.addEventListener('click', deleteTodo);
//   });
// }

// // Add new todo
// function addTodo() {
//   const input = document.getElementById('todoInput');
//   const text = input.value.trim();

//   if (text) {
//     todos.push({
//       id: Date.now(),
//       text: text,
//       completed: false
//     });
    
//     input.value = '';
//     saveTodos();
//     renderTodos();
//   }
// }

// // Toggle todo completion
// function toggleTodo(e) {
//   const index = parseInt(e.target.dataset.index);
//   const wasCompleted = todos[index].completed;
  
//   todos[index].completed = !todos[index].completed;
//   saveTodos();
//   renderTodos();

//   // Show celebration only when marking as complete (not unchecking)
//   if (!wasCompleted && todos[index].completed) {
//     showCelebration();
//   }
// }

// // Delete todo
// function deleteTodo(e) {
//   const index = parseInt(e.target.dataset.index);
//   todos.splice(index, 1);
//   saveTodos();
//   renderTodos();
// }

// // Show celebration with confetti and message
// function showCelebration() {
//   // Show random motivational message
//   const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
//   showMessage(message);
  
//   // Trigger confetti
//   createConfetti();
// }

// // Show motivational message
// function showMessage(text) {
//   // Remove existing message if any
//   const existing = document.querySelector('.celebration-message');
//   if (existing) existing.remove();

//   const messageEl = document.createElement('div');
//   messageEl.className = 'celebration-message';
//   messageEl.textContent = text;
//   document.body.appendChild(messageEl);

//   // Animate in
//   setTimeout(() => messageEl.classList.add('show'), 10);

//   // Remove after 2 seconds
//   setTimeout(() => {
//     messageEl.classList.remove('show');
//     setTimeout(() => messageEl.remove(), 300);
//   }, 2000);
// }

// // Create confetti effect
// function createConfetti() {
//   const colors = ['#5a67d8', '#48bb78', '#ed8936', '#f56565', '#9f7aea', '#38b2ac'];
//   const confettiCount = 50;

//   for (let i = 0; i < confettiCount; i++) {
//     setTimeout(() => {
//       const confetti = document.createElement('div');
//       confetti.className = 'confetti';
//       confetti.style.left = Math.random() * 100 + '%';
//       confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//       confetti.style.animationDelay = Math.random() * 0.3 + 's';
//       confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
      
//       document.body.appendChild(confetti);

//       // Remove after animation
//       setTimeout(() => confetti.remove(), 4000);
//     }, i * 30);
//   } 
// }

// // Escape HTML to prevent XSS
// function escapeHtml(text) {
//   const div = document.createElement('div');
//   div.textContent = text;
//   return div.innerHTML;
// }

// // Event listeners
// document.getElementById('addBtn').addEventListener('click', addTodo);

// document.getElementById('todoInput').addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     addTodo();
//   } 
// });

// // Load todos when app starts
// loadTodos(); 



let todos = [];
let filterCategory = 'all';
let filterPriority = 'all';
let searchQuery = '';

// Motivational messages
const motivationalMessages = [
  "🎉 Great job!",
  "✨ Well done!",
  "🌟 Amazing work!",
  "💪 Keep it up!",
  "🚀 You're on fire!",
  "👏 Fantastic!",
  "🎯 Nailed it!",
  "⭐ Outstanding!",
  "🏆 Excellent!",
  "💫 You did it!"
];

// Load todos on startup
async function loadTodos() {
  try {
    todos = await window.electronAPI.loadTodos();
    renderTodos();
  } catch (error) {
    console.error('Error loading todos:', error);
  }
}  
 
// Save todos to file
async function saveTodos() {
  try {
    await window.electronAPI.saveTodos(todos);
  } catch (error) {
    console.error('Error saving todos:', error);
  }
} 

// Render todos to the DOM
function renderTodos() {
  const todoList = document.getElementById('todoList');
  const stats = document.getElementById('stats');

  // Filter todos
  let filteredTodos = todos.filter(todo => {
    const matchesCategory = filterCategory === 'all' || todo.category === filterCategory;
    const matchesPriority = filterPriority === 'all' || todo.priority === filterPriority;
    const matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPriority && matchesSearch;
  });

  if (filteredTodos.length === 0) {
    todoList.innerHTML = '<div class="empty-state">No tasks found. Try adjusting filters!</div>';
    stats.innerHTML = '';
    updateCategoryCounts();
    return;
  }

  todoList.innerHTML = filteredTodos.map((todo) => {
    const todoIndex = todos.indexOf(todo);
    const priorityColor = getPriorityColor(todo.priority);
    const dueDateDisplay = todo.dueDate ? `<span class="due-date">📅 ${formatDate(todo.dueDate)}</span>` : '';
    
    return `
      <div class="todo-item priority-${todo.priority}" style="border-left: 4px solid ${priorityColor}">
        <div class="checkbox ${todo.completed ? 'checked' : ''}" data-index="${todoIndex}"></div>
        <div class="todo-content">
          <div class="todo-text ${todo.completed ? 'completed' : ''}" data-index="${todoIndex}">${escapeHtml(todo.text)}</div>
          <div class="todo-meta">
            <span class="category-badge">${getCategoryIcon(todo.category)} ${todo.category}</span>
            <span class="priority-badge priority-${todo.priority}">${todo.priority}</span>
            ${dueDateDisplay}
          </div>
        </div>
        <button class="delete-btn" data-index="${todoIndex}">Delete</button>
      </div>
    `;
  }).join('');

  // Update stats
  const remaining = todos.filter(t => !t.completed).length;
  const total = todos.length;
  stats.innerHTML = `${remaining} of ${total} tasks remaining`;

  // Add event listeners (remove old ones first to prevent duplicates)
  document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', toggleTodo);
  });

  document.querySelectorAll('.todo-text').forEach(text => {
    text.addEventListener('dblclick', editTodo);
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', deleteTodo);
  });

  // Update category counts
  updateCategoryCounts();
}

// Add new todo
function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  const category = document.getElementById('categorySelect').value;
  const priority = document.getElementById('prioritySelect').value;
  const dueDate = document.getElementById('dueDateInput').value;

  if (text) {
    todos.push({
      id: Date.now(),
      text: text,
      completed: false,
      category: category,
      priority: priority,
      dueDate: dueDate || null
    });
    
    input.value = '';
    document.getElementById('dueDateInput').value = '';
    saveTodos();
    renderTodos();
  }
}

// Edit todo (double-click)
function editTodo(e) {
  const index = parseInt(e.target.dataset.index);
  const todo = todos[index];
  
  const newText = prompt('Edit task:', todo.text);
  if (newText !== null && newText.trim() !== '') {
    todos[index].text = newText.trim();
    saveTodos();
    renderTodos();
  }
}

// Toggle todo completion
function toggleTodo(e) {
  const index = parseInt(e.target.dataset.index);
  const wasCompleted = todos[index].completed;
  
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();

  // Show celebration only when marking as complete
  if (!wasCompleted && todos[index].completed) {
    showCelebration();
  }
}

// Delete todo
function deleteTodo(e) {
  const index = parseInt(e.target.dataset.index);
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

// Select category from sidebar
function selectCategory(category, displayText, event) {
  event.preventDefault();
  event.stopPropagation();
  
  // Update active state in category section only
  const categoryButtons = document.querySelectorAll('.sidebar-nav .nav-item[onclick*="selectCategory"]');
  categoryButtons.forEach(item => {
    item.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
  
  filterCategory = category;
  document.getElementById('pageTitle').textContent = displayText;
  renderTodos();
}

// Select priority from sidebar
function selectPriority(priority, event) {
  event.preventDefault();
  event.stopPropagation();
  
  const priorityButtons = document.querySelectorAll('.sidebar-nav .nav-item[onclick*="selectPriority"]');
  priorityButtons.forEach(item => {
    item.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
  
  filterPriority = priority;
  renderTodos();
}

// Toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const menuBtn = document.getElementById('menuToggle');
  sidebar.classList.toggle('hidden');
  menuBtn.classList.toggle('active');
}

// Search todos
function searchTodos() {
  searchQuery = document.getElementById('searchInput').value;
  renderTodos();
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Update category counts in sidebar
function updateCategoryCounts() {
  const counts = {
    all: todos.length,
    work: todos.filter(t => t.category === 'work').length,
    personal: todos.filter(t => t.category === 'personal').length,
    urgent: todos.filter(t => t.category === 'urgent').length,
    other: todos.filter(t => t.category === 'other').length
  };
  
  Object.keys(counts).forEach(category => {
    const countEl = document.getElementById(`count-${category}`);
    if (countEl) {
      countEl.textContent = counts[category];
    }
  });
}

// Get priority color
function getPriorityColor(priority) {
  const colors = {
    high: '#e53e3e',
    medium: '#ed8936',
    low: '#48bb78'
  };
  return colors[priority] || '#718096';
} 

// Get category icon
function getCategoryIcon(category) {
  const icons = {
    work: '💼',
    personal: '🏠',
    urgent: '🔥',
    other: '📌'
  };
  return icons[category] || '📌';
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  if (date.toDateString() === today.toDateString()) return 'Today';
  if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Show celebration with confetti and message
function showCelebration() {
  const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  showMessage(message);
  createConfetti();
}  

// Show motivational message
function showMessage(text) {
  const existing = document.querySelector('.celebration-message');
  if (existing) existing.remove();

  const messageEl = document.createElement('div');
  messageEl.className = 'celebration-message';
  messageEl.textContent = text;
  document.body.appendChild(messageEl);

  setTimeout(() => messageEl.classList.add('show'), 10);

  setTimeout(() => {
    messageEl.classList.remove('show');
    setTimeout(() => messageEl.remove(), 300);
  }, 2000);
}

// Create confetti effect
function createConfetti() {
  const colors = ['#5a67d8', '#48bb78', '#ed8936', '#f56565', '#9f7aea', '#38b2ac'];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.3 + 's';
      confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
      
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }, i * 30);
  }
}

// Toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuToggle');
   
  sidebar.classList.toggle('hidden'); 
  menuBtn.classList.toggle('open');  
}    
   
// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML; 
}   

// Event listeners
document.getElementById('addBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});
document.getElementById('searchInput').addEventListener('input', searchTodos);
document.getElementById('darkModeBtn').addEventListener('click', toggleDarkMode);

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Load todos when app starts
loadTodos();