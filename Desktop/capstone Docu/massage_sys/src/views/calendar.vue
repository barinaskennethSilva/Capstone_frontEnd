<template>
<Dashboard_Cust/>
  <div class="calendar">
    <h2>{{ currentMonth }}</h2>
    <div class="navigation">
      <button @click="previousMonth">Previous Month</button>
      <button @click="nextMonth">Next Month</button>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in calendarRows" :key="index">
          <td v-for="(day, idx) in week" :key="idx" :class="{ 'current-date': isCurrentDate(day), 'prev-next-month': isPrevNextMonth(day) }">
            <div v-if="day !== null">
              <span>{{ day }}</span>
              <div v-if="appointments[day]" class="appointment" :style="{ backgroundColor: primaryColor }">
                {{ appointments[day] }}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Dashboard_Cust from "./Dashboard_Cust.vue";

export default {
  name: 'calendar',
    components:{
  Dashboard_Cust,
},
  data() {
    return {
      currentDate: new Date(),
      primaryColor: 'dodgerblue', // Primary color for appointment background
      appointments: {
        5: 'Meeting', // Example appointment on 5th day of the month
        15: 'Event', // Example appointment on 15th day of the month
      },
    };
  },
  computed: {
    currentMonth() {
      const options = { month: 'long', year: 'numeric' };
      return this.currentDate.toLocaleDateString('en-US', options);
    },
    daysInMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    },
    weeks() {
      const daysInMonth = this.daysInMonth;
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay(); // 0-indexed, 0 is Sunday
      const totalDays = daysInMonth + firstDayOfMonth - 1; // total days including padding
      const totalWeeks = Math.ceil(totalDays / 7);
      const weeks = [];

      let currentDay = 1 - firstDayOfMonth;
      for (let week = 0; week < totalWeeks; week++) {
        const days = [];
        for (let i = 0; i < 7; i++) {
          if (currentDay > 0 && currentDay <= daysInMonth) {
            days.push(currentDay);
          } else {
            days.push(null); // placeholder for days outside the current month
          }
          currentDay++;
        }
        weeks.push(days);
      }
      return weeks;
    },
    dayNames() {
      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    },
    daysOfWeek() {
      const firstDayIndex = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
      return this.dayNames.slice(firstDayIndex).concat(this.dayNames.slice(0, firstDayIndex));
    },
    calendarRows() {
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay(); // 0-indexed, 0 is Sunday
      const totalDays = this.daysInMonth.length + firstDayOfMonth - 1; // total days including padding
      const totalWeeks = Math.ceil(totalDays / 7);
      const calendarRows = [];

      let currentDay = 1 - firstDayOfMonth;
      for (let week = 0; week < totalWeeks; week++) {
        const days = [];
        for (let i = 0; i < 7; i++) {
          if (currentDay > 0 && currentDay <= this.daysInMonth.length) {
            days.push(currentDay);
          } else {
            days.push(null); // placeholder for days outside the current month
          }
          currentDay++;
        }
        calendarRows.push(days);
      }
      return calendarRows;
    },
  },
  methods: {
    isCurrentDate(day) {
      const today = new Date();
      return this.currentDate.getMonth() === today.getMonth() && day === today.getDate();
    },
    isPrevNextMonth(day) {
      return day === null;
    },
    nextMonth() {
      const newDate = new Date(this.currentDate);
      newDate.setMonth(newDate.getMonth() + 1);
      this.currentDate = newDate;
    },
    previousMonth() {
      const newDate = new Date(this.currentDate);
      newDate.setMonth(newDate.getMonth() - 1);
      this.currentDate = newDate;
    },
  },
};
</script>

<style>

.current-date {
  background-color: lightgreen;
}
.prev-next-month {
  color: #ccc;
}
.navigation {
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}

</style>
