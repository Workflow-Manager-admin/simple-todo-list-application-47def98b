import React, { useState } from 'react';
import './App.css';

/**
 * StatusBar: Styled to match iOS style bar (Figma: Status Bar)
 */
function StatusBar() {
  return (
    <div className="status-bar" style={{ width: 414, height: 44, position: 'relative', margin: '0 auto', background: 'transparent' }}>
      <div className="notch" style={{
        width: 210, height: 26, background: '#222', opacity: 0.11,
        borderRadius: '0 0 18px 18px', position: 'absolute', top: 5, left: 102,
      }} />
      <div className="status-content" style={{
        width: '100%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        padding: '0 22px',
        position: 'absolute', top: 18,
      }}>
        <span className="status-time" style={{
          fontSize: 15, color: '#222', letterSpacing: 0.5, fontWeight: 600,
        }}>
          9:41
        </span>
        <span className="status-icons" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="icon-cell" style={{
            width: 16, height: 10, background: '#3d3e4f', borderRadius: 2, display: 'inline-block'
          }} />
          <span className="icon-wifi" style={{
            width: 12, height: 10, background: '#3d3e4f', borderRadius: 2, display: 'inline-block'
          }} />
          <span className="icon-battery" style={{
            width: 20, height: 10, background: '#3d3e4f', borderRadius: 2, display: 'inline-block'
          }} />
        </span>
      </div>
    </div>
  );
}

/**
 * AppBar: Top header with calendar icon and TODO LIST title (Figma: appBar)
 */
function AppBar() {
  return (
    <div className="app-bar" style={{
      width: 414, height: 118,
      background: 'var(--appbar-bg, #9395d3)',
      display: 'flex', alignItems: 'flex-start', borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32, boxShadow: '0 2px 8px rgba(91,100,190,0.13)'
    }}>
      <div className="calendar-icon" style={{
        width: 60, height: 60, background: '#fff', borderRadius: 16, margin: '22px 24px',
        boxShadow: '0 2px 6px #9897e09f',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='38' height='38' rx='8' fill='white'/><rect x='6' y='11' width='26' height='21' rx='4' fill='%239395D3' stroke='%239395D3' stroke-width='2'/><rect x='10' y='17' width='6' height='6' rx='2' fill='white'/><rect x='22' y='17' width='6' height='6' rx='2' fill='white'/></svg>")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} />
      <div className="title-group" style={{ paddingTop: 38 }}>
        <span className="todo-title" style={{
          fontSize: 30, fontWeight: 'bold', color: '#fff', letterSpacing: 2,
          textShadow: '0 2px 8px #726cb74d', fontFamily: 'Segoe UI,Roboto,Arial,sans-serif',
          textTransform: 'uppercase'
        }}>
          TODO LIST
        </span>
      </div>
    </div>
  );
}

/**
 * One todo card
 */
function TodoCard({ title, date }) {
  return (
    <div className="todo-card" style={{
      background: 'var(--card-bg, #fff)', borderRadius: 22, boxShadow: '0 2px 8px rgba(91,100,190,0.13)',
      padding: '20px 28px 16px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minHeight: 82
    }}>
      <span className="todo-title-text" style={{
        fontSize: 20, fontWeight: 600, color: 'var(--todo-title,#333)', marginBottom: 7,
      }}>{title}</span>
      <span className="todo-date" style={{ fontSize: 14, color: 'var(--todo-date,#888aaf)' }}>{date}</span>
    </div>
  );
}

/**
 * The list of todos
 */
function TodosList() {
  // This demo uses static data to match the Figma, in practice this would be a prop or state.
  const items = [
    { title: "Buy groceries", date: "Today, 10:00 AM" },
    { title: "Complete React assignment", date: "Today, 2:00 PM" },
    { title: "Walk the dog", date: "Tomorrow, 7:00 AM" },
    { title: "Call Alice", date: "Tomorrow, 4:00 PM" },
    { title: "Read a book", date: "Friday, 8:00 PM" },
  ];
  return (
    <div className="todos-list" style={{
      width: 382, margin: '26px auto 0 auto', maxHeight: 494, overflowY: 'auto', display: 'flex',
      flexDirection: 'column', gap: 16
    }}>
      {items.map((item, idx) => (
        <TodoCard key={idx} title={item.title} date={item.date} />
      ))}
    </div>
  );
}

/**
 * Add New Todo floating button (FAB-style)
 */
function AddTodoFab({ onClick }) {
  return (
    <button
      className="fab-add-todo"
      aria-label="Add new todo"
      onClick={onClick}
      style={{
        position: 'absolute', right: 28, bottom: 98, width: 70, height: 70,
        background: 'var(--fab-bg, #9395d3)', color: 'var(--fab-color, #fff)',
        border: 'none', borderRadius: '50%', boxShadow: '0 4px 24px #888bb888',
        fontSize: 38, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s', zIndex: 10, cursor: 'pointer'
      }}>
      <span className="fab-plus" style={{ marginTop: -3, fontWeight: 'bold' }}>+</span>
    </button>
  );
}

/**
 * Navigation Bar (All / Completed)
 */
function NavBar({ active, setActive }) {
  return (
    <nav className="nav-bar" style={{
      width: 414, height: 68, background: 'var(--nav-bg,#fff)',
      position: 'absolute', bottom: 0, left: 0, borderTopLeftRadius: 26, borderTopRightRadius: 26,
      boxShadow: '0 -2px 16px #9497e09f', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 54
    }}>
      <button
        className={'nav-btn' + (active === 'all' ? ' active' : '')}
        onClick={() => setActive('all')}
        style={{
          background: 'none', border: 'none', outline: 'none',
          color: active === 'all' ? 'var(--nav-active,#9395d3)' : 'var(--nav-inactive,#b3b3b3)',
          fontSize: 17, fontWeight: 600, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', transition: 'color 0.2s'
        }}
      >
        <span className="nav-icon all" style={{
          width: 28, height: 28, borderRadius: 6, marginBottom: 2,
          background: active === 'all' ? 'var(--nav-active,#9395d3)' : 'var(--nav-inactive,#b3b3b3)'
        }} />
        <span className="nav-label" style={{ fontSize: 14 }}>All</span>
      </button>
      <button
        className={'nav-btn' + (active === 'completed' ? ' active' : '')}
        onClick={() => setActive('completed')}
        style={{
          background: 'none', border: 'none', outline: 'none',
          color: active === 'completed' ? 'var(--nav-active,#9395d3)' : 'var(--nav-inactive,#b3b3b3)',
          fontSize: 17, fontWeight: 600, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', transition: 'color 0.2s'
        }}
      >
        <span className="nav-icon completed" style={{
          width: 28, height: 28, borderRadius: 6, marginBottom: 2,
          background: active === 'completed' ? 'var(--nav-active,#9395d3)' : 'var(--nav-inactive,#b3b3b3)'
        }} />
        <span className="nav-label" style={{ fontSize: 14 }}>Completed</span>
      </button>
    </nav>
  );
}

/**
 * Main TodoPage: Brings together all core sections to match Figma design
 */
function TodoPage() {
  const [activeTab, setActiveTab] = useState('all');
  const handleAddTodo = () => {
    // Placeholder: Would open modal/dialog in real app
    window.alert('Add New ToDo: Open todo creation dialog/modal here.');
  };

  return (
    <div className="todo-app-bg" style={{
      width: 414, minHeight: 896,
      background: 'var(--primary-bg,#d6d7ef)', margin: '0 auto',
      boxShadow: '0 0 24px 0 rgba(0,0,0,0.13)', position: 'relative',
      fontFamily: "'Segoe UI','Roboto','Helvetica Neue',Arial,sans-serif'"
    }}>
      <StatusBar />
      <AppBar />
      <TodosList />
      <AddTodoFab onClick={handleAddTodo} />
      <NavBar active={activeTab} setActive={setActiveTab} />
    </div>
  );
}

export default TodoPage;
