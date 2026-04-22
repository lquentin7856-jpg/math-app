export const updateStreak = (user) => {
  const today = new Date();
  const last = user.lastActiveAt ? new Date(user.lastActiveAt) : null;

  if (!last) {
    user.streak = 1;
  } else {
    const diffDays = Math.floor((startOfDay(today) - startOfDay(last)) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) user.streak += 1;
    else if (diffDays > 1) user.streak = 1;
  }

  user.lastActiveAt = today;
};

const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
