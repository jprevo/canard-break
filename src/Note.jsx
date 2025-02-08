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

    const noteStyle = darkMode
        ? { background: '#343a40', color: '#f8f9fa' }
        : { background: '#f8f9fa', color: '#212529' };
    const textareaStyle = darkMode
        ? { background: '#343a40', color: '#f8f9fa', border: '1px solid #f8f9fa' }
        : {};

    return (
        <div className="mt-3">
            {!editing ? (
                <>
                    <button className="btn btn-info" onClick={() => setEditing(true)}>Add Note</button>
                    {note && (
                        <div className="mt-2 p-2 border rounded" style={noteStyle}>
                            {note}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <textarea
                        className="form-control"
                        rows="3"
                        style={textareaStyle}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button className="btn btn-success mt-2" onClick={handleSave}>Save Note</button>
                </>
            )}
        </div>
    );
}
