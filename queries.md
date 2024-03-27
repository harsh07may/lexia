getUserProgress

```js
const { userId } = await auth();
const query = await db
  .select()
  .from(userProgress)
  .leftJoin(courses, eq(userProgress.userId, courses.id))
  .where(eq(userProgress.userId, userId))
  .limit(1);
const queryData = query[0];
return queryData;
```

```js
const data = await db.select().from(courses);
```
