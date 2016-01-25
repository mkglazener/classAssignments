var app = new Vue({
  el: '#myApp',
  data: {
    stickyNotes: [
      {
        subject: 'mySubject',
        newAssignment: '',
        assignments: [
          'task 1',
          'task 2',
          'task 3'
        ],
        color: '#00FF99'
      }
    ],
    newSticky: '',
    colors: [
      '#00FF99',
      '#6666CC',
      '#99FF66',
      '#993333',
      '#FFCC66',
      '#FFFF99',
      '#CC3300'
    ]
  },
  methods: {
    addAssignment: function(index) {
      this.stickyNotes[index].assignments.push(
        this.stickyNotes[index].newAssignment
      );
    },
    addSticky: function() {
      this.stickyNotes.push({
        subject: this.newSticky,
        assignments: [],
        color: this.colors[Math.floor(Math.random() * (6 - 0) + 0)]
      });
    }
  }
});
