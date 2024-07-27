import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const { isPublished, ...values } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
    });

    // if (values.videoUrl) {
    //   const existingMuxData = await db.muxData.findFirst({
    //     where: {
    //       chapterId: params.chapterId,
    //     },
    //   });

    //   if (existingMuxData) {
    //     try {
    //       await Video.Assets.del(existingMuxData.assetId);
    //     } catch (error) {
    //       console.log("[Mux Asset Delete]", error);
    //     }
    //     await db.muxData.delete({
    //       where: {
    //         id: existingMuxData.id,
    //       },
    //     });
    //   }

    //   try {
    //     const asset = await Video.Assets.create({
    //       input: values.videoUrl,
    //       playback_policy: "public",
    //       test: false,
    //     });

    //     if (asset) {
    //       await db.muxData.create({
    //         data: {
    //           chapterId: params.chapterId,
    //           assetId: asset.id,
    //           playbackId: asset.playback_ids?.[0]?.id,
    //         },
    //       });
    //     }
    //   } catch (error) {
    //     console.log("[Mux Asset Create]", error);
    //   }
    // }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COURSES_CHAPTER_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
