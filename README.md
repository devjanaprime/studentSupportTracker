Student Support Tracker
===

Description:
---
Create a subject and time tracker. 

Version 1.0: 

- users can log in with @primeacademy.io email

![Login Page](server/public/images/SSTLoginPage.png)


- users will be able to view upcoming events and event details


![Landing Page](server/public/images/SSTLandingPage.png)


![Event Detail Page](server/public/images/SSTEventDetails.png)


- users will be able to submit a new Event

![Add Event Page](server/public/images/SSTAddEvent.png)

![Event Success](server/public/images/SSTEventSuccess.png)

![Event Error](server/public/images/SSTEventError.png)

- users will be able to add attendees for Events and view who has signed up to attend

![Add Attendees](server/public/images/SSTAddAttendees.png)

![Attendees Success](server/public/images/SSTAttendeeSuccess.png)

![Attendees Error](server/public/images/SSTAttendeeError.png)

![Attendees List](server/public/images/SSTAttendeesList.png)

- users will be able to add Categories
- basic report that lists all Events
- filter said list by user
- filter said list by category

![Reporting Page](server/public/images/SSTReporting.png)

Version 2.0:
- filter report by multiple users &/or categories
- visual representation via bar charts/pie graphs/etc.
- set start/end date for reports (default of all for current year)

Tech:
---

- HTML
- Angular Material
- CSS/Sass
- JS
- AngularJS
- SQL
- Node
- Express

Tables:
---

Categories:

- id
- name

Events:

- id
- user
- category_id
- dateTime
- hours
- students_in_attendance

