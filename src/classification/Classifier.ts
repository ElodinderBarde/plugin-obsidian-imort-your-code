import { FileDescriptor } from "../models/FileDescriptor";
import { ClassificationResult } from "./ClassificationResult";

export interface Classifier {
    classify(files: FileDescriptor[]): ClassificationResult[];
}
