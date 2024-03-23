# Custom axios instance

utilis.js

```js
import axios from "axios";
const customFetch = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});
export default customFetch;
```

### Usage of axios

```js
const { data } = await customFetch.get("/");
```

### useQuery mutation

```js
const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (text) => customFetch.post("/", { title: text })
    )},
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("item added");
      setTextField("");
    },
      });
```
