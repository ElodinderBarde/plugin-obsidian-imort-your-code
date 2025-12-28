import { FileDescriptor } from "../models/FileDescriptor";

export interface FileCollector {
    collect(): Promise<FileDescriptor[]>;
}
