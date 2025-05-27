-- Step 1: Create and use the database (optional, if not already created)
CREATE DATABASE IF NOT EXISTS EventManagementSystem;
USE EventManagementSystem;

-- Step 2: Create the Sessions table (required for foreign key reference)
DROP TABLE IF EXISTS Sessions;
CREATE TABLE Sessions (
    session_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    speaker VARCHAR(100),
    schedule DATETIME,
    duration INT
    -- You can add a foreign key for event_id if Events table exists
);

-- Step 3: Drop Resources table if it exists
DROP TABLE IF EXISTS Resources;

-- Step 4: Create the Resources table
CREATE TABLE Resources (
    resource_id INT AUTO_INCREMENT PRIMARY KEY,
    session_id INT NOT NULL,
    resource_type ENUM('Presentation', 'Document', 'Link', 'Video') NOT NULL,
    resource_url VARCHAR(255) NOT NULL,
    description TEXT,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES Sessions(session_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Step 5: Insert sample data into Sessions
INSERT INTO Sessions (event_id, title, speaker, schedule, duration)
VALUES 
(1, 'AI and Ethics', 'Dr. Smith', '2025-06-01 10:00:00', 60),
(1, 'Future of Web Development', 'Ms. Lee', '2025-06-01 11:30:00', 45);

-- Step 6: Insert sample data into Resources
INSERT INTO Resources (session_id, resource_type, resource_url, description)
VALUES 
(1, 'Presentation', 'https://example.com/ai_ethics_ppt', 'Slides for AI and Ethics'),
(2, 'Video', 'https://example.com/webdev_video', 'Recorded session of Web Development');
