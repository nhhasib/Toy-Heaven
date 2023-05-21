const Blog = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span> An access token is a
          credential that grants a client 
          access to specific resources or services on a server. It is typically
          used in the context of authentication and authorization mechanisms,
          such as OAuth. When a client authenticates itself and obtains an
          access token, it includes this token in each subsequent request to the
          server to access protected resources. The server validates the token
          to ensure the client has the necessary permissions, and if so, it
          allows the client to proceed. Access tokens have a limited lifespan
          and typically expire after a certain period, requiring the client to
          obtain a new token. A refresh token, on the other hand, is a
          long-lived credential that is used to obtain a new access token when
          the current one expires. Instead of sending the username and password
          for authentication again, the client presents the refresh token to the
          server, which verifies its validity and issues a new access token in
          response. Refresh tokens are typically more secure and have longer
          lifespans compared to access tokens. Regarding storage on the
          client-side, access tokens and refresh tokens should be handled with
          caution to prevent unauthorized access. 
        </p>
      </div>
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          2. Compare SQL and NoSQL databases?
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span>  Comparing SQL vs NoSQL
          databases, SQL databases are table-based databases, whereas NoSQL
          databases can be document-based, key-value pairs, and graph databases.
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases have a predefined schema, whereas
          NoSQL databases use a dynamic schema for unstructured data. Comparing
          NoSQL vs SQL performance, SQL requires specialized DB hardware for
          better performance while NoSQL uses commodity hardware.
        </p>
      </div>
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          3. What is express js? What is Nest JS ?
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span>
          Express.js is a minimal and flexible web application framework for
          Node.js that allows you to build web applications and APIs. It
          provides a simple and straightforward approach to handling HTTP
          requests, routing, middleware, and other web-related functionality.
          Express.js is widely used and has a large ecosystem of plugins and
          extensions available. Nest.js, on the other hand, is a progressive and
          opinionated framework for building efficient and scalable server-side
          applications. It is built with TypeScript and heavily influenced by
          Angular's architecture and concepts. Nest.js provides a robust and
          modular structure for developing applications, supporting features
          like dependency injection, declarative programming, and powerful
          abstractions. It also integrates well with other libraries and
          frameworks, making it suitable for building complex enterprise-level
          applications.
        </p>
      </div>
      <div className="border rounded-2xl bg-slate-100 m-6 p-6">
        <h1 className="font-bold text-2xl">
          4. What is MongoDB aggregate and how does it work ?
        </h1>
        <br />
        <p>
          <span className="font-bold">Ans. </span>
          MongoDB's aggregation framework is a powerful feature that allows you
          to perform complex data analysis and manipulation operations on
          collections of documents. It provides a flexible way to query and
          process data within MongoDB. The aggregation pipeline is the primary
          mechanism used in MongoDB for data aggregation. It consists of a
          sequence of stages, where each stage performs a specific operation on
          the input data and passes the results to the next stage. Each stage in
          the pipeline can perform operations such as filtering documents,
          transforming data, grouping documents by a specific field, calculating
          aggregate values, and more. The output of one stage becomes the input
          for the next stage until the final results are obtained. The pipeline
          stages are defined using an array of objects in the aggregation query.
          Each object represents a stage and specifies the operation and its
          parameters. Some commonly used stages include $match for filtering
          documents, $group for grouping documents, $project for shaping the
          output, and $sort for sorting the results. 
        </p>
      </div>
    </div>
  );
};

export default Blog;
