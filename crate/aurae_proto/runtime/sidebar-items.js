window.SIDEBAR_ITEMS = {"constant":[["FILE_DESCRIPTOR_SET","Encoded file descriptor set for the `runtime` package"]],"mod":[["cell_service_client","Generated client implementations."],["cell_service_server","Generated server implementations."],["instances_client","Generated client implementations."],["instances_server","Generated server implementations."],["pods_client","Generated client implementations."],["pods_server","Generated server implementations."],["spawn_client","Generated client implementations."],["spawn_server","Generated server implementations."]],"struct":[["AllocateCellRequest","/ An Aurae cell is a name given to Linux control groups (cgroups) that also include / a name, and special pre-exec functionality that is executed from within the same context / as any executables scheduled. / / A cell must be allocated for every executable scheduled. A cell defines the resource / constraints of the system to allocate for an arbitrary use case."],["AllocateCellResponse","/ The response after a cell has been allocated."],["Cell","/ An isolation resource used to divide a system into smaller resource / boundaries."],["Executable","/ The most primitive workload in Aurae, a standard executable process."],["FreeCellRequest","/ Used to remove or free a cell after it has been allocated."],["FreeCellResponse","/ Response after removing or freeing a cell."],["StartExecutableRequest","/ A request for starting an executable inside of a Cell. / / This is the lowest level of raw executive functionality. / Here you can define shell commands, and meta information about the command. / An executable is started synchronously."],["StartExecutableResponse","/ The response after starting an executable within a Cell."],["StopExecutableRequest",""],["StopExecutableResponse",""]]};