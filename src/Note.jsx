import React, { useState, useEffect } from 'react';

export default function Note({ darkMode }) { // accept darkMode prop
    const [note, setNote] = useState('');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const savedNote = localStorage.getItem('userNote') || '';
        setNote(savedNote);
    }, []);

    const handleSave = () => {
        localStorage.setItem('userNote', note);
        setEditing(false);
    };

    return (
        <div className="mt-3">
            {!editing ? (
                <>
                    <button className="btn btn-info" onClick={() => setEditing(true)}>Add Note</button>
                    {note && (
                        <div className={`mt-2 p-2 border rounded ${darkMode ? 'note-dark' : 'note-light'}`}>
                            {note}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <textarea
                        className={`form-control ${darkMode ? 'textarea-dark' : 'textarea-light'}`}
                        rows="3"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button className="btn btn-success mt-2" onClick={handleSave}>Save Note</button>
                </>
            )}
        </div>
    );
}
