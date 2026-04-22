// Simple spaced repetition update inspired by SM-2.
export const updateCardSchedule = (card, qualityScore) => {
  const quality = Math.max(0, Math.min(5, Number(qualityScore)));

  if (quality < 3) {
    card.repetitions = 0;
    card.intervalDays = 1;
  } else {
    card.repetitions += 1;
    if (card.repetitions === 1) card.intervalDays = 1;
    else if (card.repetitions === 2) card.intervalDays = 3;
    else card.intervalDays = Math.round(card.intervalDays * card.easeFactor);
  }

  card.easeFactor = Math.max(
    1.3,
    card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  const next = new Date();
  next.setDate(next.getDate() + card.intervalDays);
  card.nextReviewDate = next;

  return card;
};
